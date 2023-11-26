const isInvalidData = (data) => {
    return Object.values(data).some((value) => value === "" || value === null);
}

export default isInvalidData;