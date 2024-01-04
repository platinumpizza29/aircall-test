const getAllCalls = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const res = await fetch("https://cerulean-marlin-wig.cyclic.app/activities", {
    method: "GET",
    headers: myHeaders
  });
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    return data;
  }
};

const archiveAllCalls = async () => {};
const archiveSingleCall = async (id: string) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    is_archived: true
  });

  const requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw
  };

  fetch(
    `https://cerulean-marlin-wig.cyclic.app/activities/${id}`,
    requestOptions
  )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
};

const unarchiveAllCalls = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const res = await fetch("https://cerulean-marlin-wig.cyclic.app/reset", {
    method: "PATCH",
    headers: myHeaders,
    body: JSON.stringify({
      is_archived: false
    })
  });

  if (res.ok) {
    const data = await res.json();
    console.log(data);
    return data;
  }
};

export default {
  getAllCalls,
  archiveAllCalls,
  archiveSingleCall,
  unarchiveAllCalls
};
