import Button from "../ui/Button";

const ProfileActions = () => {
  return (
    <div className="mt-8 flex justify-end">
      <div className="w-52">
        <Button type="submit">
          Save Profile
        </Button>
      </div>
    </div>
  );
};

export default ProfileActions;