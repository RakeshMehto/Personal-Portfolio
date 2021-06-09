import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Bounce } from "react-reveal";

const EdutionCard = ({ education }) => {
  return (
    <Bounce bottom cascade>
      <Card className="card-lift--hover shadow mb-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{education.schoolName}</h5>
              <h6>{education.subHeader}</h6>
              <Badge color="info" className="mr-1">
                {education.duration}
              </Badge>
              <p className="description mt-3">
                {education.desc}
                <ul>
                  {education.descBullets
                    ? education.descBullets.map((desc) => {
                        return <li key={desc}>{desc}</li>;
                      })
                    : null}
                </ul>
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Bounce>
  );
};

export default EdutionCard;
