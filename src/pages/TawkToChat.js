import { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};

    window.Tawk_API.onLoad = function () {
      // Notification Settings
      window.Tawk_API.setAttributes(
        {
          hideWaitTime: true,
          disableAgentTyping: true,
          disableSound: true,
          disableVisitorTyping: true,
          disableDesktopPreview: true,
          disableTabNotification: true,
          disableMobilePreview: true,
        },
        function (error) {
          console.log("Tawk.to settings error:", error);
        }
      );

      // Visibility Settings
      window.Tawk_API.hide(); // Hide chat on load
      window.Tawk_API.onStatusChange(function (status) {
        if (status === "offline") {
          window.Tawk_API.hide(); // Hide when offline
        }
      });

      // Feature Settings (Disable specific features)
      window.Tawk_API.executeFunction("disableEmoji", true);
      window.Tawk_API.executeFunction("disableFileUpload", true);
      window.Tawk_API.executeFunction("disableChatRating", true);
      window.Tawk_API.executeFunction("disableEmailTranscript", true);
    };
  }, []);

  return <></>;
};

export default TawkToChat;
