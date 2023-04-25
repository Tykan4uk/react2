/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { UserNameProps } from "./userNameProps";
import { UserService } from "../../services/userService";
import { IUserName } from "./userNameInterface";
import styles from "./userName.module.css";

export const UserName: FC<UserNameProps> = ({ userId }) => {
  const [userName, setUserName] = useState<IUserName>();

  useEffect(() => {
    const loadUser = async () => {
      const user = await UserService.getUserById(userId);

      setUserName(user);
    }

    loadUser();
  }, [])

  return (
    <div className={styles["userName"]}>
      <span>{`${userName?.firstName} ${userName?.lastName}`}</span>
    </div>
  );
}