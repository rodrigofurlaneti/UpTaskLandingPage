import{N as a}from"./index-Ck2Ju-RK.js";const m={log:t=>a.post("/time",t).then(e=>e.data),getByTask:t=>a.get(`/time/task/${t}`).then(e=>e.data),delete:t=>a.delete(`/time/${t}`)};export{m as t};
