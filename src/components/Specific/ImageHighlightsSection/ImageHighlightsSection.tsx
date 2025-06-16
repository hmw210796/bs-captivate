import SplitFeature from "@/components/General/SplitFeature/SplitFeature";
import React from "react";

import styles from "./ImageHighlightsSection.module.scss";

const ImageHighlightsSection = () => {
  return (
    <>
      <SplitFeature
        title="The perfect presentation"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere aliquam lectus duis feugiat maecenas penatibus."
        imageUrl="/images/presentation-1.png"
        itemList={[
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor sit",
        ]}
        className={styles.presentation}
      />

      <SplitFeature
        title="All in one platform"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere aliquam lectus duis feugiat maecenas penatibus."
        imageUrl="/images/platform-1.png"
        itemList={[
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor sit",
        ]}
        className={styles.platform}
      />
    </>
  );
};

export default ImageHighlightsSection;
