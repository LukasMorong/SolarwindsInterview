import { useEffect, useState } from "react";

export const UserInformation = (props) => {
  const [renderCount, setRenderCount] = useState(0);
  const { age } = props;

  useEffect(() => {
    setRenderCount((renderCount) => {
      return renderCount + 1;
    });
  }, [props]);

  if (!age) return null;

  return (
    <div>
      {age < 18 ? (
        <span style={{ color: "red" }}>
          You are too young to be our employee
        </span>
      ) : (
        <span style={{}}>You are old enough :)</span>
      )}
      <small> ({renderCount})</small>
    </div>
  );
};
