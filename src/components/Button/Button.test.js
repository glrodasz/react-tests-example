import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Button from "./Button";

describe("[ components / Button ]", () => {
  describe("#structure", () => {
    describe("when default props are provided", () => {
      it("should render correctly", () => {
        // given
        const props = {};

        // when
        const tree = renderer
          .create(<Button {...props}>button</Button>)
          .toJSON();

        // then
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when `color` prop is `blue`", () => {
      it("should render correctly", () => {
        // given
        const props = { color: "blue" };

        // when
        const tree = renderer
          .create(<Button {...props}>button</Button>)
          .toJSON();

        // then
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when `isVisible` prop is `false`", () => {
      it("should render correctly", () => {
        // given
        const props = { isVisible: false };

        // when
        const tree = renderer
          .create(<Button {...props}>button</Button>)
          .toJSON();

        // then
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("#behaviour", () => {
    describe("when `Button` is clicked", () => {
      it("should call `onClick` handler", () => {
        // given
        const onClickMock = jest.fn();
        const wrapper = shallow(<Button onClick={onClickMock}>button</Button>);

        // when
        wrapper.simulate("click");
        // wrapper.setProps({ color: 'blue'})

        // then
        expect(onClickMock).toHaveBeenCalledTimes(1);
        // expect(wrapper.find('button').hasClass(/bg-red-500/)).toBe(true)
      });
    });
  });
});
