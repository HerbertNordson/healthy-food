import { Member } from "./style";

const Membership = () => {
  return (
    <Member>
      <div>
        <h2>
          Join our membership <br />
          to get special offer
        </h2>
        <form>
          <input type="text" placeholder="Enter your email address" />
          <button type="submit">Join </button>
        </form>
      </div>
    </Member>
  );
};

export default Membership;
