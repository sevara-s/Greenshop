import { Avatar, Tooltip } from "antd";
import type { AuthUser, QueryType } from "../../../../../@types";
import { useQueryHandler } from "../../../../../hooks/useQueryHandler";

const UserInfo = (props: { id?: string }) => {
  const { data }:QueryType<AuthUser> = useQueryHandler({
    pathname: "user",
    url: `user/by_id/${props.id}`,
  });
  console.log(data);
  return (
    <>
    <div>
        <Tooltip title={`${data?.name} ${data?.surname}`} className="cursor-pointer">
          <Avatar src={data?.profile_photo} className="w-[80px] h-[80px]"/> 
        </Tooltip>
        
    </div>
    </>
  )
};

export default UserInfo;
