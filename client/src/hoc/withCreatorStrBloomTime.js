import React from "react";

export default function withCreatorStrBloomTime(Component) {
    return function ComponentWithFunction(props) {
        const creatorStrBloomTime = (arrBloomTime) => {
            let deepCopyBloomTime = JSON.parse((JSON.stringify(arrBloomTime)))
            let strSelectedBloomTime = ""
            let firstSelect = ""
            let prevMonth = ""
            let expectedIdMonth
            deepCopyBloomTime.map((month) => {
                if (month.checked) {
                    switch (expectedIdMonth) {
                        case (undefined) : {
                            expectedIdMonth = -1000
                            firstSelect = month.value
                            strSelectedBloomTime = month.value
                            break
                        }
                        case (-1000) : {
                            strSelectedBloomTime = firstSelect + ", " + month.value
                            expectedIdMonth = ++month.id
                            break
                        }
                        case (month.id) : {
                            strSelectedBloomTime = firstSelect + prevMonth + "-" + month.value
                            expectedIdMonth = expectedIdMonth = ++month.id
                            break
                        }
                        default : {
                            expectedIdMonth = ++month.id
                            firstSelect = strSelectedBloomTime
                            prevMonth = ", " + month.value
                            strSelectedBloomTime = strSelectedBloomTime + ", " + month.value
                        }
                    }
                }
            })
            return strSelectedBloomTime
        }

        return (<Component
            {...props}
            creatorStrBloomTime={creatorStrBloomTime}
        />);
    }
}