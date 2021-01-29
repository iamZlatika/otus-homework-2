import React from "react";
import Field from "./Field";
import { mount, shallow } from "enzyme";

describe("Field", () => {
  let handler;
  beforeEach(() => {
    handler = jest.fn();
  });
  it("Should render field", () => {
    expect(shallow(<Field field={[[]]} onClick={handler} />)).not.toBeNull();
  });
  it("Should contain cells", () => {
    const field = mount(<Field field={[[true]]} onClick={handler} />);
    const cells = field.findWhere((el) => el.hasClass("cell"));
    expect(cells.length).toBe(1);
  });
  it("Should contain number of cells according to field size", () => {
    const field = mount(
      <Field
        field={[
          [false, false],
          [true, true],
        ]}
        onClick={handler}
      />
    );
    const cells = field.findWhere((el) => el.hasClass("cell"));
    expect(cells.length).toBe(4);
  });
  it("Should call on click handler", () => {
    const field = mount(
      <Field
        field={[
          [false, false],
          [false, true],
        ]}
        onClick={handler}
      />
    );
    field.find(".filled").simulate("click");
    expect(handler).toBeCalledWith(1, 1);
  });
});
