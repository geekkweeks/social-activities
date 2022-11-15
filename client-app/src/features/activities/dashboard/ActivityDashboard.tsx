import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityForm from "../../form/ActivityForm";
import ActivityDetails from "../details/ActivityDetails";
import ActivitionList from "./ActivityList";

interface Props {
  activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
  console.log(activities);
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivitionList activities={activities} />
      </Grid.Column>
      <Grid.Column width="6">
        {activities[0] && <ActivityDetails activity={activities[0]} />}
        <ActivityForm />
      </Grid.Column>
    </Grid>
  );
}
