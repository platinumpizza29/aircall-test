interface Call {
  id: string; // unique ID of the call
  created_at: Date; // creation date
  direction: "inbound" | "outbound"; // inbound or outbound call
  from: string; // caller's number
  to: string; // callee's number
  via: string; // Aircall number used for the call
  duration: number; // duration of the call in seconds
  is_archived: boolean; // call is archived or not
  call_type: "missed" | "answered" | "voicemail"; // type of call: missed, answered, or voicemail
}

export default Call;
