import {
  lazy,
} from "react";

const Profile =
  lazy(() =>
    import(
      "./Profile"
    )
  );

export default
  Profile;