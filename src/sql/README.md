# SQL-скрипт

``` sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `login` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`originalSource`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`originalSource` ;

CREATE TABLE IF NOT EXISTS `mydb`.`originalSource` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `type` VARCHAR(45) NULL,
  `url` VARCHAR(45) NULL,
  `rating` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`media`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`media` ;

CREATE TABLE IF NOT EXISTS `mydb`.`media` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `type` VARCHAR(45) NULL,
  `url` VARCHAR(45) NULL,
  `metadata` VARCHAR(45) NULL,
  `originalSource_id` INT NOT NULL,
  PRIMARY KEY (`id`, `originalSource_id`),
  INDEX `fk_media_originalSource1_idx` (`originalSource_id` ASC) VISIBLE,
  CONSTRAINT `fk_media_originalSource1`
    FOREIGN KEY (`originalSource_id`)
    REFERENCES `mydb`.`originalSource` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`request` ;

CREATE TABLE IF NOT EXISTS `mydb`.`request` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `created` VARCHAR(45) NULL,
  `media_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `media_id`),
  INDEX `fk_request_media1_idx` (`media_id` ASC) VISIBLE,
  INDEX `fk_request_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_request_media1`
    FOREIGN KEY (`media_id`)
    REFERENCES `mydb`.`media` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_request_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`requestResult`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`requestResult` ;

CREATE TABLE IF NOT EXISTS `mydb`.`requestResult` (
  `id` INT NOT NULL,
  `description` VARCHAR(45) NULL,
  `rating` VARCHAR(45) NULL,
  `request_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `request_id`),
  INDEX `fk_requestResult_request1_idx` (`request_id` ASC) VISIBLE,
  INDEX `fk_requestResult_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_requestResult_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `mydb`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_requestResult_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- -----------------------------------------------------
-- Data for table `mydb`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`role` (`id`,`name`,`description`) VALUES (1, 'user', 'desc1');
INSERT INTO `mydb`.`role` (`id`,`name`,`description`) VALUES (2, 'admin', 'desc2');

COMMIT;

-- -----------------------------------------------------
-- Data for table `mydb`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`user` (`id`, `name`, `login`, `password`, `email`, `role_id`) VALUES (1, 'name1', 'login1', 'password1', 'email1@gmail.com', 1);
INSERT INTO `mydb`.`user` (`id`, `name`, `login`, `password`, `email`, `role_id`) VALUES (2, 'name2', 'login2', 'password2', 'email1@gmail.com', 1);
INSERT INTO `mydb`.`user` (`id`, `name`, `login`, `password`, `email`, `role_id`) VALUES (3, 'name3', 'login3', 'password3', 'email1@gmail.com', 1);

COMMIT;

-- -----------------------------------------------------
-- Data for table `mydb`.`originalSource_id`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`originalSource` (`id`,`name`,`type`,`url`,`rating`) VALUES (1, 'name1','type1','url1',NULL);
INSERT INTO `mydb`.`originalSource` (`id`,`name`,`type`,`url`,`rating`) VALUES (2, 'name2','type2','url2',NULL);

COMMIT;

-- -----------------------------------------------------
-- Data for table `mydb`.`media`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`media` (`id`,`name`,`type`,`url`,`metadata`,`originalSource_id`) VALUES (1, 'name1','type1','url1','metadata1',1);
INSERT INTO `mydb`.`media` (`id`,`name`,`type`,`url`,`metadata`,`originalSource_id`) VALUES (2,  'name2','type2','url2','metadata2',1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`request`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`request` (`id`, `name`, `description`, `created`, `media_id`, `user_id`) VALUES (1, 'Text search', 'desc', '2024-05-18', 1,1);
INSERT INTO `mydb`.`request` (`id`, `name`, `description`, `created`,`media_id`, `user_id`) VALUES (2, 'Video search', 'desc', '2024-05-18', 2,2);

COMMIT;

-- -----------------------------------------------------
-- Data for table `mydb`.`requestResult`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`requestResult` (`id`,`description`, `rating`, `request_id`, `user_id`) VALUES (1, 'desc1', 'rait1',1,1);
INSERT INTO `mydb`.`requestResult` (`id`,`description`, `rating`, `request_id`, `user_id`) VALUES (2, 'desc2', 'rait2', 2,2);

COMMIT;
```
