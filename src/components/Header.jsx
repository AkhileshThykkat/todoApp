import Button from "./Button"

const Header = ({title,onAdd,showBtn}) => {
  return (
    <div className="header">
      <h1>{title}</h1>
     <Button color={showBtn?'red':'blue'} onAdd={onAdd} text={showBtn?'Close':'Add'} />
    </div>
  )
}
Header.defaultProps = {
    title :"Tasks"
}
export default Header