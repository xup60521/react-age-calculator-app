import ArrowIcon from "@/assets/images/icon-arrow.svg";
import { useState } from "react";
import { dateDiff, isDayValid, isMonthValid, isYearValid } from "./utils";

type DateType = {
    year?: number;
    month?: number;
    day?: number;
};

export default function App() {
    const [date, setDate] = useState<DateType>({});
    return (
        <main className="w-full min-h-screen bg-c_Off_white flex items-center justify-center md:px-0 px-4">
            <div className="bg-white rounded-3xl md:rounded-br-[10rem] rounded-br-[6rem] font-poppings p-8 py-12 gap-4 flex flex-col md:w-[47rem] w-full">
                <InputField date={date} setDate={setDate} />
                <div className="w-full flex items-center md:my-0 my-10">
                    <div className="h-full flex-grow border-t-[1px] border-c_Light_grey"></div>
                    <button className="rounded-full transition hover:bg-black bg-c_Purple overflow-hidden md:relative absolute flex items-center justify-center size-[5rem]  md:scale-100 scale-75 md:translate-x-0 translate-x-[-50%] md:left-0 left-[50%]">
                        <span className="sr-only">calculate</span>
                        <img
                            src={ArrowIcon}
                            alt="arrow"
                            className="size-[2.5rem]"
                        />
                    </button>
                </div>
                <ResultField date={date} />
            </div>
        </main>
    );
}

function InputField({
    date,
    setDate,
}: {
    date: DateType;
    setDate: React.Dispatch<React.SetStateAction<DateType>>;
}) {
    const { day, month, year } = date;
    const dayOK = isDayValid({ d: day, m: month, y: year });
    const monthOK = isMonthValid({ m: month, y: year });
    const yearOK = isYearValid({ y: year });
    return (
        <div className="flex md:gap-8 gap-4">
            <div className="flex flex-col gap-2 relative">
                <label
                    className={`text-sm font-bold tracking-[0.15rem] ${
                        !dayOK.ok ? "text-c_Light_red" : "text-c_Smokey_grey"
                    }`}
                    htmlFor="day-input"
                >
                    DAY
                </label>
                <input
                    type="text"
                    id="day-input"
                    placeholder="DD"
                    value={date.day ?? ""}
                    onChange={(e) => {
                        if (e.target.value === "" || e.target.value === " ") {
                            return setDate((prev) => {
                                prev.day = undefined;
                                return { ...prev };
                            });
                        }
                        const value = Number(e.target.value);
                        if (Number.isNaN(value)) {
                            return;
                        }
                        if (Math.floor(value) <= 0) return;
                        return setDate((prev) => {
                            prev.day = Math.floor(value);
                            return { ...prev };
                        });
                    }}
                    className={`w-full md:w-[10rem] text-lg md:text-[2rem] rounded-lg py-3 px-4 md:px-6 font-bold outline-none border-[1px] ${
                        dayOK.ok ? "border-c_Light_grey" : "border-c_Light_red"
                    }`}
                />
                {(() => {
                    if (dayOK.ok) return null;
                    if (dayOK.error === "invalid time")
                        return (
                            <span className="text-xs absolute left-0 -bottom-6 italic text-c_Light_red font-poppings">
                                Must be a valid day
                            </span>
                        );
                    if (dayOK.error === "must be in the past")
                        return (
                            <span className="text-xs absolute left-0 -bottom-6 italic text-c_Light_red font-poppings">
                                Must be in the past
                            </span>
                        );
                })()}
            </div>
            <div className="flex flex-col gap-2 relative">
                <label
                    className={`text-sm font-bold tracking-[0.15rem] ${
                        !monthOK.ok ? "text-c_Light_red" : "text-c_Smokey_grey"
                    }`}
                    htmlFor="month-input"
                >
                    MONTH
                </label>
                <input
                    type="text"
                    id="month-input"
                    placeholder="MM"
                    value={date.month ?? ""}
                    onChange={(e) => {
                        if (e.target.value === "" || e.target.value === " ") {
                            return setDate((prev) => {
                                prev.month = undefined;
                                return { ...prev };
                            });
                        }
                        const value = Number(e.target.value);
                        if (Number.isNaN(value)) {
                            return;
                        }
                        if (Math.floor(value) > 12 || Math.floor(value) <= 0)
                            return;
                        return setDate((prev) => {
                            prev.month = Math.floor(value);
                            return { ...prev };
                        });
                    }}
                    className={`w-full md:w-[10rem] text-lg md:text-[2rem] rounded-lg py-3 px-4 md:px-6 font-bold outline-none border-[1px] ${
                        monthOK.ok
                            ? "border-c_Light_grey"
                            : "border-c_Light_red"
                    }`}
                />
                {(() => {
                    if (monthOK.ok) return null;
                    if (monthOK.error === "invalid time")
                        return (
                            <span className="text-xs absolute left-0 -bottom-6 italic text-c_Light_red font-poppings">
                                Must be a valid day
                            </span>
                        );
                    if (monthOK.error === "must be in the past")
                        return (
                            <span className="text-xs absolute left-0 -bottom-6 italic text-c_Light_red font-poppings">
                                Must be in the past
                            </span>
                        );
                })()}
            </div>
            <div className="flex flex-col gap-2 relative">
                <label
                    className={`text-sm font-bold tracking-[0.15rem] ${
                        !yearOK.ok ? "text-c_Light_red" : "text-c_Smokey_grey"
                    }`}
                    htmlFor="year-input"
                >
                    YEAR
                </label>
                <input
                    type="text"
                    id="year-input"
                    placeholder="YYYY"
                    value={date.year ?? ""}
                    onChange={(e) => {
                        if (e.target.value === "" || e.target.value === " ") {
                            return setDate((prev) => {
                                prev.year = undefined;
                                return { ...prev };
                            });
                        }
                        const value = Number(e.target.value);
                        if (Number.isNaN(value)) {
                            return;
                        }
                        return setDate((prev) => {
                            prev.year = Math.floor(value);
                            return { ...prev };
                        });
                    }}
                    className={`w-full md:w-[10rem] text-lg md:text-[2rem] rounded-lg py-3 px-4 md:px-6 font-bold outline-none border-[1px] ${
                        yearOK.ok ? "border-c_Light_grey" : "border-c_Light_red"
                    }`}
                />
                {(() => {
                    if (yearOK.ok) return null;
                    if (yearOK.error === "invalid time")
                        return (
                            <span className="text-xs absolute left-0 -bottom-6 italic text-c_Light_red font-poppings">
                                Must be a valid year
                            </span>
                        );
                    if (yearOK.error === "must be in the past")
                        return (
                            <span className="text-xs absolute left-0 -bottom-6 italic text-c_Light_red font-poppings">
                                Must be in the past
                            </span>
                        );
                })()}
            </div>
        </div>
    );
}

function ResultField({ date }: { date: DateType }) {
    const { day, month, year } = date;
    const dayOK = isDayValid({ d: day, m: month, y: year });
    const monthOK = isMonthValid({ m: month, y: year });
    const yearOK = isYearValid({ y: year });
    let result: undefined | { years: number; months: number; days: number };
    if (year && month && day && dayOK && monthOK && yearOK) {
        result = dateDiff(new Date(year, month -1, day), new Date());
    }
    return (
        <div className="flex flex-col font-poppings italic font-black text-[3.5rem] md:text-[5rem] leading-[4rem] md:leading-[6.5rem]">
            <p>
                <span className="text-c_Purple">
                    {result && day && month && year ? result.years : "- - "}
                </span>{" "}
                years
            </p>
            <p>
                <span className="text-c_Purple">
                    {result && day && month && year ? result.months : "- - "}
                </span>{" "}
                months
            </p>
            <p>
                <span className="text-c_Purple">
                    {result && day && month && year ? result.days : "- - "}
                </span>{" "}
                days
            </p>
        </div>
    );
}
