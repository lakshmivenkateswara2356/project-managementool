const link = path => process.env.REACT_APP_MAIN_SITE + path;

function env(name) {
    const nodeENV = process.env.NODE_ENV.toUpperCase();

    return process.env[`REACT_APP_${nodeENV}_${name}`] || process.env[`REACT_APP_${name}`];
}

const handleAxiosError = (e, showError) => {
    console.log(e);
    if (e?.response?.status === 500) return showError('Something went wrong');
    if (e?.response?.status === 400) return showError(`Ensure you've entered valid information.`);
    if (e?.response?.status === 404) return showError(`We can't find what you are looking for.`);
    if (e?.response?.data) {
        console.log(e.response.data);
        const errors = e.response.data?.errors || [
            'Our server encountered an error, Please try again later',
        ];

        if (typeof errors === 'object' && errors !== null) showError(errors.pop().message);

        showError(errors.pop());
    } else {
        showError('Something went wrong');
    }
};

export { link, env, handleAxiosError };
