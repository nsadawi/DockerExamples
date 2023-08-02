library(shiny)
# Define the UI
ui <- fluidPage(
  titlePanel("My Shiny App"),
  sidebarLayout(
    sidebarPanel(
      sliderInput("num_points", "Number of Points", min = 10, max = 100, value = 50)
    ),
    mainPanel(
      plotOutput("scatter_plot")
    )
  )
)

# Define the server logic
server <- function(input, output) {
  output$scatter_plot <- renderPlot({
    # Generate random data based on the input value
    x <- rnorm(input$num_points)
    y <- rnorm(input$num_points)
    
    # Create a scatter plot
    plot(x, y, main = "Scatter Plot", xlab = "X", ylab = "Y")
  })
}

# Run the Shiny app
shinyApp(ui = ui, server = server)

