type TimeValidReturnType = {
    ok?: boolean;
    error: "invalid time" | "must be in the past" | undefined;
};

function getHowManyDaysInAMonth(m: number, y: number) {
    return new Date(y, m, 0).getDate();
}

export function isYearValid(date: { y?: number }): TimeValidReturnType {
    const { y } = date;
    if (!y) {
        return { ok: true, error: undefined };
    }
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    if (y > yearNow) return { error: "must be in the past" };
    return { ok: true, error: undefined };
}
export function isMonthValid(date: {
    m?: number;
    y?: number;
}): TimeValidReturnType {
    const { m, y } = date;
    if (!m) {
        return { ok: true, error: undefined };
    }
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    const monthNow = dateNow.getMonth() + 1;
    if (y === yearNow && m > monthNow) return { error: "must be in the past" };
    return { ok: true, error: undefined };
}
export function isDayValid(date: {
    d?: number;
    m?: number;
    y?: number;
}): TimeValidReturnType {
    const { d, m, y } = date;
    if (!d) {
        return { ok: true, error: undefined };
    }
    if (!y || !m) {
        if (d > 31) return { error: "invalid time" };
        return { ok: true, error: undefined };
    }
    const dateObj = new Date();
    const yearNow = dateObj.getFullYear();
    const monthNow = dateObj.getMonth() + 1;
    const dateNow = dateObj.getDate();
    const howManyDays = getHowManyDaysInAMonth(m, y);
    if (d > howManyDays) {
        return { error: "invalid time" };
    }
    if (y === yearNow && m === monthNow && d > dateNow)
        return { error: "must be in the past" };
    return { ok: true, error: undefined };
}

export function dateDiff(startDate: Date, endDate: Date) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Calculate the total differences
    let yearDiff = end.getFullYear() - start.getFullYear();
    let monthDiff = end.getMonth() - start.getMonth();
    let dayDiff = end.getDate() - start.getDate();

    // Adjust month and year differences if necessary
    if (dayDiff < 0) {
        monthDiff--;
        dayDiff += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    }

    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    return {
        years: yearDiff,
        months: monthDiff,
        days: dayDiff
    };
}