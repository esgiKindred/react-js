import React from "react";
import "./styles.css";

export function ButtonPrimary({ text }) {
  return <button className="button is-primary is-responsive">{text}</button>;
}

export function ButtonSecondary({ text }) {
  return <button className="button is-secondary is-responsive">{text}</button>;
}

export function ButtonDanger({ text }) {
  return <button className="button is-danger is-responsive">{text}</button>;
}
