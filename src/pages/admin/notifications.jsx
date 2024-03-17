import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { BallTriangleSpinner } from "../../widgets/loader/ballTriangle";

export function Notifications() {

  const [loading, setLoading] = React.useState(false);

  const [showAlerts, setShowAlerts] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const alerts = ["gray", "green", "orange", "red"];

  return (
    <div className="mt-5 h-full">
      <div className="container mx-auto py-4">

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Notifications</h1>
        </div>
        {loading ?
          <div className="w-full flex justify-center">
            <div className="my-4">
              <BallTriangleSpinner />
            </div>
          </div>
          :
          <div className="grid grid-cols-1 gap-4">
            {alert.length === 0 ?
              <div className="w-full">
                <img src="/static/Images/no-data.jpg" alt="No data" className="mx-auto h-64 w-72" />
              </div>
              :
              <CardBody className="flex flex-col gap-4 p-4">
                {alerts.map((color) => (
                  <Alert
                    key={color}
                    open={showAlerts[color]}
                    color={color}
                    icon={
                      <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                    }
                    onClose={() => setShowAlerts((current) => ({ ...current, [color]: false }))}
                  >
                    A simple {color} alert with an <a href="#">example link</a>. Give
                    it a click if you like.
                  </Alert>
                ))}
              </CardBody>
            }
          </div>
        }
      </div>
    </div>
  );
}
