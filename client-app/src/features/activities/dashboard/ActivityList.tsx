import { useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";

interface Props {
  activities: Activity[];
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActivityList({
  activities,
  deleteActivity,
  submitting,
}: Props) {
  const { activityStore } = useStore();
  const [target, setTarget] = useState<string>("");

  function handleActivityDelete(
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Segment>
      <Item.Group divided>
        {activities.map((acttivity) => (
          <Item key={acttivity.id}>
            <Item.Content>
              <Item.Header as="a">{acttivity.title}</Item.Header>
              <Item.Meta>{acttivity.date}</Item.Meta>
              <Item.Description>
                <div>{acttivity.description}</div>
                <div>
                  {acttivity.city}, {acttivity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => activityStore.selectActivity(acttivity.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  name={acttivity.id}
                  loading={submitting && target === acttivity.id}
                  onClick={(e) => handleActivityDelete(e, acttivity.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={acttivity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
