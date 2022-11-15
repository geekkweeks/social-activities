import React from "react";
import {
  Button,
  Item,
  ItemContent,
  ItemHeader,
  Label,
  Segment,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
}

export default function ActivitionList({ activities }: Props) {
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
                <Button floated="right" content="View" color="blue" />
                <Label basic content={acttivity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
