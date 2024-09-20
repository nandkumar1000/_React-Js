
const WelcomeMessage = ({ onGetPostsClick }) => {
  return <center className="Welcome-Message"> <h1 >There are no post
    <button type="button" class="btn btn-primary" onClick={onGetPostsClick}>get Post from Server.</button>
  </h1></center>

};
export default WelcomeMessage;