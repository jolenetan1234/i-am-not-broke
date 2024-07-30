const useLocalStorage = (key: any, val: any) => {
    [key, val] = [key.toString(), val.toString()];
    localStorage.setItem(key, val);
};

export default useLocalStorage;