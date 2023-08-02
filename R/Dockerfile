# Use an official R runtime as the base image
FROM r-base:latest
# Set the working directory inside the container
WORKDIR /app
# Install required R packages
RUN R -e "install.packages('shiny')"
# Copy the application files to the working directory
COPY . .
# Expose the port that the application listens on
EXPOSE 3838
# Define the command to run the application when the container starts
CMD ["R", "-e", "shiny::runApp(host='0.0.0.0', port=3838)"]

