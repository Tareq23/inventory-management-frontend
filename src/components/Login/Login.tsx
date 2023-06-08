/* eslint-disable prettier/prettier */
import { VisibilityOff, Visibility, Badge } from "@mui/icons-material"
import {
  Box,
  Button,
  Container,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    navigate("/admin-homepage")
  }
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url('https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=740&t=st=1686223474~exp=1686224074~hmac=e65b4860c0969aa5ad6c1f85262cc398653bafc3597bb3f8725a534048f141a0')`,
        backgroundRepeat: "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
          py: 2,
          px: 6,
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: 4,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          height: "50vh",
        }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h4"
          component="h2"
          mb={2}
          sx={{ fontWeight: "bold", color: "  #0B0B45" }}
        >
          Inventory Manager
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
        >
          <InputLabel
            htmlFor="input-with-icon-adornment"
            sx={{ color: "  #0B0B45" }}
          >
            Employee ID
          </InputLabel>
          <Input
            required
            id="input-with-icon-adornment"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <Badge />
                </IconButton>
              </InputAdornment>
            }
            sx={{ width: "320px" }}
          />
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
          mt={2}
        >
          <InputLabel
            htmlFor="input-with-icon-adornment"
            sx={{ color: "  #0B0B45" }}
          >
            Password
          </InputLabel>
          <Input
            required
            id="standard-adornment-password"
            type={showPassword ? "password" : "text"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            sx={{ width: "320px" }}
          />
        </Box>

        <Button sx={{ mt: 2 }} type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </Container>
  )
}
