import { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../app/models/activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
}: Props) {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState<Activity>(initialState);

  function handleSubmit() {
    createOrEdit(activity);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            value={activity.title}
            name="title"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea
            placeholder="Description"
            value={activity.description}
            name="description"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <input
            placeholder="Category"
            value={activity.category}
            name="category"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Date</label>
          <input
            placeholder="Date"
            value={activity.date}
            name="date"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input
            placeholder="Venue"
            value={activity.venue}
            name="venue"
            onChange={handleInputChange}
          />
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
