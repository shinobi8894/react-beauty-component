import "./style.css";

interface Color {
  name: string;
  shades: number[];
}

const colors: Color[] = [
  {
    name: "primary",
    shades: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    name: "success",
    shades: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    name: "danger",
    shades: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    name: "warning",
    shades: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
];

export default function StylesPage() {
  return (
    <div>
      Styles page
      {colors.map((color) => (
        <div key={color.name} className="card-box">
          {color.shades.map((shade) => (
            <div
              key={`${color.name}-${shade}`}
              className="card"
              style={{
                backgroundColor: `var(--color-${color.name}-${shade})`,
              }}
            />
          ))}
          <div
            className="card"
            style={{
              backgroundColor: `var(--color-${color.name})`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
