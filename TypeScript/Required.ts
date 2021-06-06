interface OptionalProps {
  name?: string;
  value?: string;
}

const optionalThing: OptionalProps = {
  name: "podaje tylko name bo i tak wszystko jest opcjonalne",
};

type RequiredType = Required<OptionalProps>;

const requiredThing: RequiredType = {
  name: "teraz muszę podać name",
  value: "Muszę też podać value bo jest wszystko obowiązkowe",
};

// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// --- DODATEK: rozszerzenie Requried typu o dodatkowe pole ----------------------

type extendedRequiredType = Required<OptionalProps> & {
  id: string;
  description?: string;
};

const extendedType: extendedRequiredType = {
  id: "324-j23b-h5j45v", // dodałem id jako obowiązkowe więc muszę je podać
  name: "podaję nazwę bo nadal jest obowiązkowe",
  value: "value też jest obowiąkzowe więc podanę",
  // mogłbym jeszcze podać description ale określiłem że jest opcjonalne więc nie muszę podawać
};
