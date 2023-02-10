import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GenericEmailSent from "components/EmailSent";

function EmailSent() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => navigate("../step2"), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <GenericEmailSent
      title="Email was sent!"
      secondary1="Check your email inbox."
      secondary2="We sent you an email to edit your password. If you didn’t received the email, please check your SPAM inbox"
    />
  );
}

export default EmailSent;
