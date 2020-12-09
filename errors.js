export const ERROR_TYPE = {
    invalidId: "invalid_id",
    notFound: "not_found",
};

export const ERROR_STATUS = {
    [ERROR_TYPE.invalidId]: 500,
    [ERROR_TYPE.notFound]: 404,
};