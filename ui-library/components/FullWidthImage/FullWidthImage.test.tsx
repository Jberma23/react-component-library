import { render } from "@testing-library/react";
import { FullWidthImage } from ".";

describe(FullWidthImage, () => {
  it("renders with defaults", () => {
    const { asFragment } = render(
      <FullWidthImage
        src="http://www.not-a-real-url-this-is-just-for-testing.com/image.png"
        alt="This is a test image"
        captionText="This is a test image caption"
        aspectRatio="16/9"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders without a caption", () => {
    const { asFragment } = render(
      <FullWidthImage
        src="http://www.not-a-real-url-this-is-just-for-testing.com/image.png"
        alt="This is a test image"
        aspectRatio="1/1"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders without alt text", () => {
    const { asFragment } = render(
      <FullWidthImage
        src="http://www.not-a-real-url-this-is-just-for-testing.com/image.png"
        captionText="This is a test image caption"
        aspectRatio="4/3"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("uses its height/width as the aspect ratio when it is passed", () => {
    render(
      <FullWidthImage
        src="http://www.not-a-real-url-this-is-just-for-testing.com/image.png"
        captionText="This is a test image caption"
        height={1999}
        width={2000}
      />
    );

    expect(
      document.querySelector<HTMLElement>("figure > div")?.style
    ).toMatchObject({
      aspectRatio: "2000/1999",
    });
  });

  it("passes all a11y checks", async () => {
    await expect(
      <FullWidthImage
        src="http://www.not-a-real-url-this-is-just-for-testing.com/image.png"
        alt="This is a test image"
        captionText="This is a test image caption"
        aspectRatio="5/4"
      />
    ).toBeA11yWhenRendered();
  });
});
