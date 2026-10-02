(function () {
  const STORAGE_KEY = 'valentineSurvey';

  function getData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      return {};
    }
  }

  function setData(data) {
    const current = getData();
    const merged = { ...current, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return merged;
  }

  function setValue(key, value) {
    return setData({ [key]: value });
  }

  function getCheckedValues(name) {
    return Array.from(
      document.querySelectorAll('input[type="checkbox"][name="' + name + '"]:checked')
    ).map(function (input) {
      return input.value;
    });
  }

  window.valentineSurvey = {
    getData: getData,
    setData: setData,
    setValue: setValue,
    getCheckedValues: getCheckedValues,
    clear: function () {
      localStorage.removeItem(STORAGE_KEY);
    }
  };
})();
