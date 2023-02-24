import React from "react";

export default function withCreatorStrLightSensitivity(Component) {
    return function ComponentWithFunction(props) {
        const creatorStrLightSensitivity = (sunOrShadow, isSunAndShadow) => {
            let strLightSensitivity = ""
            if (!sunOrShadow) {
                strLightSensitivity = "Тень"
            } else {
                strLightSensitivity = "Солнце"
            }
            if (isSunAndShadow) {
                strLightSensitivity = strLightSensitivity + ", Солнце-полутень"
            }
            return strLightSensitivity
        }
        return (<Component
            {...props}
            creatorStrLightSensitivity={creatorStrLightSensitivity}
        />);
    }
}