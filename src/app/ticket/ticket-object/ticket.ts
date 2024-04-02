import { Employee } from "../../employee/employee-object/employee";

export class Ticket{
  ticketNumber! : number;
  title! : string;
  description! : string;
  severity! : string;
  status! : string;
  assignee! : Employee;
  watchers! : Set<Employee>;
}
