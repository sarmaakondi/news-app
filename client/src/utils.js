const formatDate = (dateString) => {
    const [month, day, year] = dateString.split("/");
    return new Date(`${day}/${month}/${year}`);
};

export default formatDate;
