import { makeAutoObservable, observable } from "mobx";
import agent from "../api/agent";
import { Activity } from "../models/activity";

export default class ActivityStore {
  // properties
  activities: Activity[] = [];
  selectedActivity: Activity | null = null;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadActivities = async () => {
    this.loadingInitial = true;
    const activities = await agent.Activities.list();
    activities.forEach((activity) => {
      activity.date = activity.date.split("T")[0];
      this.activities.push(activity);
    });
    this.loadingInitial = false;
    try {
    } catch (error) {
      console.log(error);
      this.loadingInitial = false;
    }
  };
}
