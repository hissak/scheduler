import React from "react";

import { render, cleanup } from "@testing-library/react";

import Form from "components/Appointment/Form";

const { getByPlaceholderText } = render(
  <Form interviewers={interviewers} />
);

const { getByTestId } = render(
  <Form interviewers={interviewers} name="Lydia Miller-Jones" />
);

afterEach(cleanup);

describe("Form", () => {
  const interviewers = [
    {
      id: 1,
      student: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    }
  ];

  it("renders without student name if not provided", () => {
    expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
  });

  it("renders with initial student name", () => {
    expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");
  });
});
