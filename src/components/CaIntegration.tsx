import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

interface Props {
  type: "quick-chat" | "discussion";
}

const CalIntegration = ({ type }: Props) => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: type });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#9a174b" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [type]);

  return (
    <Cal
      key={type}
      namespace={type}
      calLink={`jaskeerat-singh/${type}`}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
};

export default CalIntegration;
