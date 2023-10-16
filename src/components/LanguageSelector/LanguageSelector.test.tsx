import renderer from "react-test-renderer";
import LanguageSelector from "./LanguageSelector";

it("changes the class when hovered", () => {
  const component = renderer.create(<LanguageSelector />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
