import { motion } from "motion/react";
import { Card } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface EnergyCardProps {
  title: string;
  value: string;
  unit?: string;
  icon: LucideIcon;
  // trend queda para compatibilidad pero ya no se muestra
  trend?: number;
  // NUEVO: texto libre tipo "Mejorando", "Sin cambios", etc.
  trendLabel?: string;
  color?: string;
  delay?: number;
}

export function EnergyCard({
  title,
  value,
  unit,
  icon: Icon,
  trendLabel,
  color = "#4CAF50",
  delay = 0,
}: EnergyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-muted-foreground mb-2">{title}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[2rem] leading-none" style={{ color }}>
                {value}
              </span>
              {unit && (
                <span className="text-muted-foreground">{unit}</span>
              )}
            </div>

            {trendLabel && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 0.3 }}
                className="mt-2 text-[#4CAF50]"
              >
                {trendLabel}
              </motion.p>
            )}
          </div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-3 rounded-xl"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon className="w-6 h-6" style={{ color }} />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
