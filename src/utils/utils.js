export const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getSalaryText = ({
    minJdSalary,
    maxJdSalary,
    salaryCurrencyCode
}) => {
    let minFormatted = !!minJdSalary ? minJdSalary : "";
    let maxFormatted = !!maxJdSalary ? maxJdSalary : "";

    if (minFormatted && maxFormatted) {
        return `Estimated Salary: ${minFormatted} - ${maxFormatted} ${salaryCurrencyCode}`;
    } else if (minFormatted) {
        return `Estimated Salary: ${minFormatted} ${salaryCurrencyCode}`;
    } else if (maxFormatted) {
        return `Estimated Salary: ${maxFormatted} ${salaryCurrencyCode}`;
    } else {
        return "Salary not provided";
    }
};

export const getExperienceRange = ({ minExp, maxExp }) => {
    if (!!minExp && !!maxExp) {
        return `${minExp} - ${maxExp} Years`;
    } else if (!!minExp) {
        return `${minExp} Years`;
    } else if (!!maxExp) {
        return `${maxExp} Years`;
    } else {
        return "Experience not provided";
    }
};
