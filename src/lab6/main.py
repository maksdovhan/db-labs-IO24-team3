import fastapi
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
import pymysql

app = FastAPI()


class DataBase(object):
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(DataBase, cls).__new__(cls)
        return cls.instance

    def __init__(self):
        self.connection = None
        self.cursor = None
        self.__connect()

    def __connect(self):
        self.connection = pymysql.connect(
            host='localhost',
            port=3306,
            user='root',
            password='03101982',
            database='mydb'
        )
        self.cursor = self.connection.cursor(pymysql.cursors.DictCursor)

    def execute(self, command):
        self.cursor.execute(command)
        result = self.cursor.fetchall()
        self.connection.commit()
        return result


@app.get("/api/allmedia")
async def get_media():
    db = DataBase()
    return JSONResponse(db.execute('SELECT * FROM media'))


@app.get('/api/media/{id}')
def get_media_by_id(id):
    db = DataBase()
    result = db.execute(f'SELECT * FROM media WHERE id={id}')
    if not result:
        raise fastapi.HTTPException(status_code=404)
    return JSONResponse(result)


@app.put('/api/updatemedia/{id}')
async def update_media(id, req: Request):
    req_dict = await req.json()
    db = DataBase()
    for key in req_dict:
        if not db.execute(f'SELECT * FROM media WHERE id={id}'):
            raise fastapi.HTTPException(status_code=404)
        db.execute(f"UPDATE media SET {key}='{req_dict[key]}' WHERE id={id}")
    return {"message": f'Media {id} was successfully updated!'}


@app.delete('/api/deletemedia/{id}')
def delete_media(id):
    db = DataBase()
    db.execute(f"DELETE FROM request WHERE media_id={id}")
    db.execute(f"DELETE FROM media WHERE id={id}")
    db.connection.commit()
    return {'message': f'Media {id} was successfully deleted!'}




@app.get("/api/allroles")
async def get_role():
    db = DataBase()
    return JSONResponse(db.execute('SELECT * FROM role'))


@app.get('/api/role/{id}')
def get_role_by_id(id):
    db = DataBase()
    result = db.execute(f'SELECT * FROM role WHERE id={id}')
    if not result:
        raise fastapi.HTTPException(status_code=404)
    return JSONResponse(result)


@app.post('/api/addrole', status_code=201)
async def add_new_role(req: Request):
    req_dict = await req.json()
    try:
        id = req_dict['id']
        name = req_dict['name']
        description = req_dict['description']
    except KeyError:
        raise fastapi.HTTPException(status_code=400, detail="Missing required fields!")
    db = DataBase()
    try:
        db.execute(
            f"INSERT INTO `role` (`id`, `name`, `description`)"
            f"VALUES ({id}, '{name}', '{description}');")
    except Exception as e:
        raise fastapi.HTTPException(status_code=500, detail=str(e))
    return {'message': 'New role was successfully added!'}


@app.put('/api/updaterole/{id}')
async def update_role(id, req: Request):
    req_dict = await req.json()
    db = DataBase()
    for key in req_dict:
        if not db.execute(f'SELECT * FROM role WHERE id={id}'):
            raise fastapi.HTTPException(status_code=404)
        db.execute(f"UPDATE role SET {key}='{req_dict[key]}' WHERE id={id}")
    return {"message": f'Role {id} was successfully updated!'}
