import React from "react";
import { AuthContext } from '../routes/AuthProvider'

export default function useAuth() {
    return React.useContext(AuthContext);
  }