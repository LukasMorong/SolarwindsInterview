export const Header = (props) => {
  const { users } = props;

  let lastUserName = "";

  if (users.length !== 0) {
    lastUserName = users.slice(-1)[0].name;
  }

  return (
    <div style={{ background: "grey", padding: 20, marginBottom: 5 }}>
      Last employee is <strong>{lastUserName}</strong>
    </div>
  );
};
