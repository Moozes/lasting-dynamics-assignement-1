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
      title="Your workspace is ready"
      secondary1="Check your email inbox."
      secondary2="We sent you a confirmation email."
    />
  );
}

export default EmailSent;
