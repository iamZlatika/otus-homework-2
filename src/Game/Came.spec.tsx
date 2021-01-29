import React from "react";
import Game, { createEmptyField } from "./Game";
import { mount } from "enzyme";

describe("Create empty field", () => {
  it("Should create 1X1 field", () => {
    expect(createEmptyField(1, 1)).toEqual([[false]]);
  });
  it("Should create 3X3 field", () => {
    expect(createEmptyField(3, 3)).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]);
  });
});

describe("Game", () => {
  it("Should be initialized with empty field", () => {
    const game = mount(<Game height={10} width={10} />);
    expect(game.find(".cell").length).toBe(100);
    expect(game.find(".empty").length).toBe(100);
    expect(game.find(".filled").length).toBe(0);
  });

  it("Should toggle cell state on click", () => {
    const game = mount(<Game height={10} width={10} />);
    expect(game.find(".filled").length).toBe(0);

    game.find(".cell").first().simulate("click");
    expect(game.find(".filled").length).toBe(1);

    game.find(".filled").first().simulate("click");
    expect(game.find(".filled").length).toBe(0);
  });
});
