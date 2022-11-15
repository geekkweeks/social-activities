import React from "react";
import { Button, Checkbox, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../app/models/activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
}

export default function ActivityForm({ activity, closeForm }: Props) {
  return (
    <Segment clearing>
      <Form>
        <Form.Field>
          <label>Title</label>
          <input placeholder="Title" />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea placeholder="Description" />
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <input placeholder="Category" />
        </Form.Field>
        <Form.Field>
          <label>Date</label>
          <input placeholder="Date" />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input placeholder="Venue" />
        </Form.Field>
        <Button floated="right" positive type="submit">
          Submit
        </Button>
        <Button onClick={closeForm} floated="right" type="button">
          Cancel
        </Button>
      </Form>
    </Segment>
  );
}
